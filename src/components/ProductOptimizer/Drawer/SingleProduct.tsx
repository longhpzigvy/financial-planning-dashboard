import React, { PureComponent } from 'react';
import { dropRight, get, isString, last } from 'lodash';
import { Button, Tabs } from 'antd';
const { TabPane } = Tabs;

import { addPercentage, getSumFunds, Product } from './DrawerProduct';
import LinkProductAndFund from './LinkProductAndFund';
import { DrawerProductWrapper } from '../styled';
import { ActionDrawerGeneral, DrawerTitle } from '../../StrategyPage/Drawer/styled';
import { EditCellType } from '../../StrategyPage/Drawer/EditCell';
import AssetsAllocation from './AssetsAllocation';
import Fees from './Fees';

interface SingleProductProps {
  values: Product;
  setFieldValue: (field: string, value: any) => void;
  isSubmitting: boolean;
  dirty: boolean;
  readOnly?: boolean;
}

class SingleProduct extends PureComponent<SingleProductProps> {
  public columns = [
    {
      title: 'Fund Name',
      dataIndex: 'name',
      key: '0',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: '1',
      className: 'text-align-right',
      editable: true,
      dollar: true,
      type: EditCellType.number,
      width: '30%',
    },
    {
      title: 'Percentage',
      dataIndex: 'percentage',
      className: 'text-align-center',
      editable: true,
      type: EditCellType.number,
      options: {
        min: 0,
        max: 100,
        formatter: (value: any) => `${value}%`,
        parser: (value: any) => value.replace('%', ''),
      },
      key: '2',
      width: '20%',
    },
  ];
  public onEdit = (value: any, name: string, rowIndex: number) => {
    const { setFieldValue, values } = this.props;
    const tableName = 'details.funds';
    const fieldName = `${tableName}.${rowIndex}.${name}`;
    value = value > 0 ? value : 0;
    setFieldValue(fieldName, value);

    // Side-effects
    const record = get(values, `${tableName}[${rowIndex}]`);
    if (record && record.id === -1) {
      return;
    }

    if (isString(value)) {
      return;
    }

    if (values.details && values.details.funds.length > 0) {
      const funds = values.details.funds;

      if (name === 'percentage') {
        const totalRow = last(funds);
        if (totalRow && totalRow.value) {
          const newValue = (value * totalRow.value) / 100;
          setFieldValue(`${tableName}.${rowIndex}.value`, newValue);
        }
      } else {
        funds[rowIndex].value = value;
        const fundsWithoutTotal = dropRight(funds);
        const updatedFunds = addPercentage(fundsWithoutTotal);
        const total = funds[funds.length - 1];
        total.value = getSumFunds(fundsWithoutTotal);

        setFieldValue(tableName, [...updatedFunds, total]);
      }
    }
  }
  public getColumns = () => {
    const { readOnly } = this.props;

    return this.columns.map((col) => {
      if (col.editable) {
        return {
          ...col,
          onCell: (record: any, rowIndex: number) => ({
            ...col,
            readOnly,
            record,
            rowIndex,
            type: col.type || 'text',
            onEdit: this.onEdit,
          }),
        };
      }

      return col;
    });
  }

  public render() {
    const { values, setFieldValue, isSubmitting, dirty, readOnly } = this.props;

    return (
      <DrawerProductWrapper>
        <DrawerTitle>{get(values.details, 'product.name', 'My Product')}</DrawerTitle>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Fund" key="1">
            <LinkProductAndFund
              columns={this.getColumns()}
              values={values}
              setFieldValue={setFieldValue}
              readOnly={readOnly}
            />
          </TabPane>
          <TabPane tab="Asset Allocation" key="2">
            <AssetsAllocation data={get(values.details, 'assetAllocation')} links={[]} />
          </TabPane>
          <TabPane tab="Fees" key="3">
            <Fees data={get(values.details, 'fees')} links={[]} readOnly={readOnly} />
          </TabPane>
        </Tabs>

        {!readOnly && (
          <ActionDrawerGeneral visible>
            <Button htmlType={'submit'} type={'primary'} disabled={isSubmitting || !dirty}>
              <span>Save</span>
            </Button>
          </ActionDrawerGeneral>
        )}
      </DrawerProductWrapper>
    );
  }
}

export default SingleProduct;
