import {
  ASSET_TYPES,
  COVER_TYPE,
  FROM_1,
  investmentTypeOptions,
  maritalStatusOptions,
  OWNER,
  POLICY_OWNER,
  ownerWithJointOptions,
} from '../enums/options';

export function addJointOption(
  col: { dataIndex: string },
  record: { type: string },
  options: Array<{ value: any; label: any }>,
) {
  const result = [...options];
  if (
    ASSET_TYPES[record.type] === ASSET_TYPES.lifestyle ||
    ASSET_TYPES[record.type] === ASSET_TYPES.directInvestment ||
    ASSET_TYPES[record.type] === ASSET_TYPES.property
  ) {
    result.push({
      value: 'joint',
      label: 'Joint',
    });
  }

  return result;
}

// Marital State is Single
export function removePartnerOption(
  col: { dataIndex?: string; options?: any },
  maritalStatus: string,
  options?: Array<{ value: any; label: any }>,
) {
  let result = options ? [...options] : col && col.options ? [...col.options] : [];
  if (result && col.dataIndex) {
    switch (col.dataIndex) {
      case 'from':
      case 'to': {
        result = result.filter((option: any) => option.label !== FROM_1.partnerRetirement);
        break;
      }
      case 'policyOwner':
      case 'owner': {
        result = result.filter((option: any) => option.label !== OWNER.partner);
      }
    }
  }

  return result;
}

function addInflationOptions(options: any[], dynamicCustomValue: { [key: string]: any }) {
  const result = [...options];
  result.unshift(
    { value: 'salaryInflation', label: `Salary Inflation (CPI) = ${dynamicCustomValue.salaryInflation}%` },
    { value: 'inflationCPI', label: `Inflation (CPI) = ${dynamicCustomValue.inflationCPI}%` },
  );
  return result;
}

function addDefaultSgcRate(options: any[], dynamicCustomValue: { [key: string]: any }) {
  const result = [...options];
  result.unshift({ value: 'sgc', label: `Default SG rate = ${dynamicCustomValue.sgcRate}%` });
  return result;
}

function loadInvestmentOptions(record: { type: string }) {
  switch (ASSET_TYPES[record.type]) {
    case ASSET_TYPES.lifestyle: {
      return [
        { value: 'primaryResidence', label: 'Primary Residence' },
        { value: 'homeContents', label: 'Home Contents' },
        { value: 'motorVehicles', label: 'Motor Vehicles' },
      ];
    }
    case ASSET_TYPES.directInvestment:
    case ASSET_TYPES.property: {
      return [
        { value: 'cash', label: 'Cash' },
        { value: 'fixedInterest', label: 'Fixed Interest' },
        { value: 'australianEquity', label: 'Australian Equity' },
        { value: 'internationalEquity', label: 'International Equity' },
        { value: 'property', label: 'Property' },
        { value: 'growthAlternatives', label: 'Growth Alternatives' },
        { value: 'defensiveAlternatives', label: 'Defensive Alternatives' },
        { value: 'preservationProfile', label: 'Preservation Profile' },
        { value: 'defensiveProfile', label: 'Defensive Profile' },
        { value: 'moderateProfile', label: 'Moderate Profile' },
        { value: 'balancedProfile', label: 'Balanced Profile' },
        { value: 'growthProfile', label: 'Growth Profile' },
        { value: 'highGrowthProfile', label: 'High Growth Profile' },
      ];
    }
    case ASSET_TYPES.super:
    case ASSET_TYPES.abp:
    case ASSET_TYPES.ttr: {
      return [
        { value: 'preservation', label: 'Preservation' },
        { value: 'defensive', label: 'Defensive' },
        { value: 'moderate', label: 'Moderate' },
        { value: 'balanced', label: 'Balanced' },
        { value: 'growth', label: 'Growth' },
        { value: 'highGrowth', label: 'High Growth' },
      ];
    }
  }
  return investmentTypeOptions;
}

export function removeSuperFund(options: Array<{ value: any; label: any }>) {
  const result = [...options];
  return result.filter((option: any) => option.label !== POLICY_OWNER.superFund);
}

export function loadOptionsBaseOnCol(
  col: { dataIndex: string; options?: Array<{ value: any; label: any }> },
  record: { type: string; coverType?: string },
  customValue: { maritalStatus?: string; dynamicCustomValue?: object },
) {
  const { maritalStatus, dynamicCustomValue } = customValue;
  if (col.options) {
    let options = [...col.options];

    if (col.dataIndex === 'owner' && record.type && options) {
      if (maritalStatus === maritalStatusOptions[0].value) {
        options = ownerWithJointOptions;
      } else {
        options = addJointOption(col, record, options);
      }
    }
    if (maritalStatus === maritalStatusOptions[1].value) {
      // Marital State is Single
      options = removePartnerOption(col, maritalStatus, options);
    }
    if (dynamicCustomValue) {
      if (col.dataIndex === 'indexation') {
        options = addInflationOptions(options, dynamicCustomValue);
      }
      if (col.dataIndex === 'sgrate') {
        options = addDefaultSgcRate(options, dynamicCustomValue);
      }
    }
    if (col.dataIndex === 'investment' && record.type && options) {
      options = loadInvestmentOptions(record);
    }
    if (col.dataIndex === 'policyOwner' && options && record.coverType) {
      if (
        COVER_TYPE[record.coverType] === COVER_TYPE.trauma ||
        COVER_TYPE[record.coverType] === COVER_TYPE.childTrauma
      ) {
        options = removeSuperFund(options);
      }
    }

    return options;
  }
  return;
}
