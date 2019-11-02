import React from 'react';
import moment from 'moment';

import EditableCell from '../assets/EditableCell';
import {
  ExpandedAssetsGroups,
  ExpandedAssetsInlineGroups,
  ExpandedAssetsText,
  ExpandedSelectGroup,
} from '../assets/styled';
import {
  hasPrivateHealthInsuranceOptions,
  isOrNotOptions,
  lookingForCoupleAdviceOptions,
  riskProfileOptions,
} from '../../../enums/options';

export interface BasicInformation {
  description: string;
  dob: string;
  expandable: {
    riskProfile: string;
    hasPrivateHealthInsurance: boolean;
    lookingForCoupleAdvice?: boolean;
    jointRiskProfile?: string;
    retirementYear?: number;
  };
}

const joinRiskProfileOptions = riskProfileOptions;

const ExpandedBasicInformationRow = (
  record: BasicInformation,
  index: number,
  indent: number,
  expanded: boolean,
): React.ReactNode => {
  const { expandable, description } = record;

  if (description && expandable) {
    // Note: Always use Jul 1st as the month and day in the calculation for the retirement year
    const retirementYear = expandable.retirementYear ? moment([expandable.retirementYear, 6, 1]) : moment();
    const retirementAge = record.dob && retirementYear.diff(moment(record.dob), 'years');
    if (description === 'Client') {
      return (
        <ExpandedAssetsGroups>
          <ExpandedAssetsInlineGroups>
            <ExpandedAssetsText>Client’s risk profile is</ExpandedAssetsText>
            <ExpandedSelectGroup>
              <EditableCell
                record={record}
                dataIndex={'expandable.riskProfile'}
                type={'select'}
                tableName={'basicInformation'}
                options={riskProfileOptions}
                rowIndex={index}
                editable={true}
                expandedField={true}
              />
            </ExpandedSelectGroup>
            <ExpandedAssetsText>and</ExpandedAssetsText>
            <ExpandedSelectGroup>
              <EditableCell
                record={record}
                dataIndex={'expandable.hasPrivateHealthInsurance'}
                type={'select'}
                tableName={'basicInformation'}
                options={hasPrivateHealthInsuranceOptions}
                rowIndex={index}
                editable={true}
                expandedField={true}
              />
            </ExpandedSelectGroup>
            <ExpandedAssetsText>private health insurance</ExpandedAssetsText>
          </ExpandedAssetsInlineGroups>

          <ExpandedAssetsInlineGroups>
            <ExpandedAssetsText>Client is seeking advice for</ExpandedAssetsText>
            <ExpandedSelectGroup>
              <EditableCell
                record={record}
                dataIndex={'expandable.lookingForCoupleAdvice'}
                type={'select'}
                tableName={'basicInformation'}
                options={lookingForCoupleAdviceOptions}
                rowIndex={index}
                editable={true}
                expandedField={true}
              />
            </ExpandedSelectGroup>
          </ExpandedAssetsInlineGroups>

          <ExpandedAssetsInlineGroups>
            <ExpandedAssetsText>Client will retire in</ExpandedAssetsText>
            <ExpandedSelectGroup>
              <EditableCell
                record={record}
                dataIndex={'expandable.retirementYear'}
                type={'date'}
                pickerType={'year'}
                tableName={'basicInformation'}
                rowIndex={index}
                editable={true}
                expandedField={true}
                disabledYear={true}
              />
            </ExpandedSelectGroup>
            <ExpandedAssetsText>(Age {retirementAge})</ExpandedAssetsText>
          </ExpandedAssetsInlineGroups>

          <ExpandedAssetsInlineGroups>
            <ExpandedAssetsText>Client</ExpandedAssetsText>
            <ExpandedSelectGroup>
              <EditableCell
                record={record}
                dataIndex={'expandable.isSmoker'}
                type={'select'}
                tableName={'basicInformation'}
                options={isOrNotOptions}
                rowIndex={index}
                editable={true}
                expandedField={true}
              />
            </ExpandedSelectGroup>
            <ExpandedAssetsText>a smoker</ExpandedAssetsText>
          </ExpandedAssetsInlineGroups>
        </ExpandedAssetsGroups>
      );
    }

    return (
      <ExpandedAssetsGroups>
        <ExpandedAssetsInlineGroups>
          <ExpandedAssetsText>Partner’s risk profile is</ExpandedAssetsText>
          <ExpandedSelectGroup>
            <EditableCell
              record={record}
              dataIndex={'expandable.riskProfile'}
              type={'select'}
              tableName={'basicInformation'}
              options={riskProfileOptions}
              rowIndex={index}
              editable={true}
              expandedField={true}
            />
          </ExpandedSelectGroup>
          <ExpandedAssetsText>profile and</ExpandedAssetsText>
          <ExpandedSelectGroup>
            <EditableCell
              record={record}
              dataIndex={'expandable.hasPrivateHealthInsurance'}
              type={'select'}
              tableName={'basicInformation'}
              options={hasPrivateHealthInsuranceOptions}
              rowIndex={index}
              editable={true}
              expandedField={true}
            />
          </ExpandedSelectGroup>
          <ExpandedAssetsText>private health insurance</ExpandedAssetsText>
        </ExpandedAssetsInlineGroups>

        <ExpandedAssetsInlineGroups>
          <ExpandedAssetsText>Joint risk profile is</ExpandedAssetsText>
          <ExpandedSelectGroup>
            <EditableCell
              record={record}
              dataIndex={'expandable.jointRiskProfile'}
              type={'select'}
              tableName={'basicInformation'}
              options={joinRiskProfileOptions}
              rowIndex={index}
              editable={true}
              expandedField={true}
            />
          </ExpandedSelectGroup>
        </ExpandedAssetsInlineGroups>

        <ExpandedAssetsInlineGroups>
          <ExpandedAssetsText>Partner will retire in</ExpandedAssetsText>
          <ExpandedSelectGroup>
            <EditableCell
              record={record}
              dataIndex={'expandable.retirementYear'}
              type={'date'}
              pickerType={'year'}
              tableName={'basicInformation'}
              rowIndex={index}
              editable={true}
              expandedField={true}
              disabledYear={true}
            />
          </ExpandedSelectGroup>
          {retirementAge && <ExpandedAssetsText>({retirementAge})</ExpandedAssetsText>}
        </ExpandedAssetsInlineGroups>

        <ExpandedAssetsInlineGroups>
          <ExpandedAssetsText>Partner</ExpandedAssetsText>
          <ExpandedSelectGroup>
            <EditableCell
              record={record}
              dataIndex={'expandable.isSmoker'}
              type={'select'}
              tableName={'basicInformation'}
              options={isOrNotOptions}
              rowIndex={index}
              editable={true}
              expandedField={true}
            />
          </ExpandedSelectGroup>
          <ExpandedAssetsText>a smoker</ExpandedAssetsText>
        </ExpandedAssetsInlineGroups>
      </ExpandedAssetsGroups>
    );
  }

  return null;
};

export default ExpandedBasicInformationRow;
