import React from 'react';
import numeral from 'numeral';
import { cashFlowDrillDownData, cashFlowDrillDownDataWithLifeEvent } from './drilldownData';
import { ChartBlockDrillDown } from './styled';
import GraphPresentation from '../../StrategyPage/Graph/GraphPresentation';
import { GraphType } from '../../StrategyPage/Graph/GraphContainer';

const stackConfig = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          // Include a dollar sign in the ticks
          callback: (value: any, index: any, values: any) => {
            return numeral(Math.round(value * 100) / 100).format('$0,0.[00]');
          },
        },
        stacked: true,
      },
    ],
  },
};

const startWithZeroConfig = {
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
        },
      },
    ],
  },
};

const CashflowDrilldownCharts = (props: {
  retirementYear: number;
  currentDrilldown: number;
  shouldShow: boolean;
  hasLifeEvent?: boolean;
}) => {
  const { retirementYear, currentDrilldown, shouldShow, hasLifeEvent } = props;
  const data = hasLifeEvent
    ? (cashFlowDrillDownDataWithLifeEvent as any)[retirementYear]
    : (cashFlowDrillDownData as any)[retirementYear];
  if (!shouldShow) {
    return null;
  }

  return (
    <>
      <ChartBlockDrillDown hidden={currentDrilldown !== 0}>
        <GraphPresentation
          type={GraphType.Bar}
          data={data.income}
          redraw
          height={470}
          options={{
            legend: {
              display: true,
              position: 'bottom',
            },
            ...stackConfig,
          }}
        />
      </ChartBlockDrillDown>
      <ChartBlockDrillDown hidden={currentDrilldown !== 1}>
        <GraphPresentation
          type={GraphType.Bar}
          data={data.expenses}
          redraw
          height={470}
          options={{
            legend: {
              display: true,
              position: 'bottom',
            },
            ...stackConfig,
          }}
        />
      </ChartBlockDrillDown>
      <ChartBlockDrillDown hidden={currentDrilldown !== 2}>
        <GraphPresentation
          type={GraphType.Bar}
          data={data.netIncome}
          redraw
          height={470}
          options={{
            legend: {
              display: true,
              position: 'bottom',
            },
            ...startWithZeroConfig,
          }}
        />
      </ChartBlockDrillDown>
    </>
  );
};

export default CashflowDrilldownCharts;
