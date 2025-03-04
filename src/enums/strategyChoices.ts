import { StrategyTypes } from './strategies';

export interface Choice {
  value: string;
  label: string;
  children?: Choice[];
}

export interface StrategyChoice {
  [key: string]: Choice[];
}

export const strategyChoices: StrategyChoice = {
  [StrategyTypes.Superannuation]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'salarySacrifice',
          label: 'Salary Sacrifice',
          children: [
            {
              value: 'maximise',
              label: 'Maximise',
            },
            {
              value: 'fixedRegular',
              label: 'Fixed - regular',
            },
            {
              value: 'customOneOff',
              label: 'Custom - one off',
            },
          ],
        },
        {
          value: 'nonConcessional',
          label: 'Non-concessional contribution',
          children: [
            {
              value: 'maximise',
              label: 'Maximise',
            },
            {
              value: 'customRegular',
              label: 'Fixed - regular',
            },
            {
              value: 'customOneOff',
              label: 'Custom - one off',
            },
          ],
        },
        {
          value: 'personalDeductible',
          label: 'Personal deductible contributions',
          children: [
            {
              value: 'maximise',
              label: 'Maximise',
            },
            {
              value: 'fixedRegular',
              label: 'Fixed - regular',
            },
            {
              value: 'customOneOff',
              label: 'Custom - one off',
            },
          ],
        },
        {
          value: 'spouse',
          label: 'Spouse contributions',
          children: [
            {
              value: 'oneOff',
              label: 'One off',
            },
            {
              value: 'regular',
              label: 'Regular',
            },
          ],
        },
        {
          value: 'recontribution',
          label: 'Recontribution',
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'salarySacrifice',
          label: 'Salary Sacrifice',
          children: [
            {
              value: 'maximise',
              label: 'Maximise',
            },
            {
              value: 'fixedRegular',
              label: 'Fixed - regular',
            },
            {
              value: 'customOneOff',
              label: 'Custom - one off',
            },
          ],
        },
        {
          value: 'nonConcessional',
          label: 'Non-concessional contribution',
          children: [
            {
              value: 'maximise',
              label: 'Maximise',
            },
            {
              value: 'customRegular',
              label: 'Fixed - regular',
            },
            {
              value: 'customOneOff',
              label: 'Custom - one off',
            },
          ],
        },
        {
          value: 'personalDeductible',
          label: 'Personal deductible contributions',
          children: [
            {
              value: 'maximise',
              label: 'Maximise',
            },
            {
              value: 'fixedRegular',
              label: 'Fixed - regular',
            },
            {
              value: 'customOneOff',
              label: 'Custom - one off',
            },
          ],
        },
        {
          value: 'spouse',
          label: 'Spouse contributions',
          children: [
            {
              value: 'oneOff',
              label: 'One off',
            },
            {
              value: 'regular',
              label: 'Regular',
            },
          ],
        },
        {
          value: 'recontribution',
          label: 'Recontribution',
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
  ],
  [StrategyTypes.Pensions]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'commenceAccount',
          label: 'Commence account based pension',
        },
        {
          value: 'commenceTransition',
          label: 'Commence transition to retirement pension',
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'commenceAccount',
          label: 'Commence account based pension',
        },
        {
          value: 'commenceTransition',
          label: 'Commence transition to retirement pension',
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
  ],
  [StrategyTypes.Investments]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'newInvestment',
          label: 'Establish a new investment portfolio',
        },
        {
          value: 'existingInvestment',
          label: 'Add funds into existing investment portfolio',
          children: [
            {
              value: 'lumpSum',
              label: 'Lump sum contribution',
            },
            {
              value: 'regular',
              label: 'Regular contributions',
            },
          ],
        },
        {
          value: 'withdrawFunds',
          label: 'Withdraw funds from investment portfolio',
          children: [
            {
              value: 'lumpSum',
              label: 'Lump sum withdrawal',
            },
            {
              value: 'regular',
              label: 'Regular drawdowns',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'newInvestment',
          label: 'Establish a new investment portfolio',
        },
        {
          value: 'existingInvestment',
          label: 'Add funds into existing investment portfolio',
          children: [
            {
              value: 'lumpSum',
              label: 'Lump sum contribution',
            },
            {
              value: 'regular',
              label: 'Regular contributions',
            },
          ],
        },
        {
          value: 'withdrawFunds',
          label: 'Withdraw funds from investment portfolio',
          children: [
            {
              value: 'lumpSum',
              label: 'Lump sum withdrawal',
            },
            {
              value: 'regular',
              label: 'Regular drawdowns',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'joint',
      label: 'Joint',
      children: [
        {
          value: 'newInvestment',
          label: 'Establish a new investment portfolio',
        },
        {
          value: 'existingInvestment',
          label: 'Add funds into existing investment portfolio',
          children: [
            {
              value: 'lumpSum',
              label: 'Lump sum contribution',
            },
            {
              value: 'regular',
              label: 'Regular contributions',
            },
          ],
        },
        {
          value: 'withdrawFunds',
          label: 'Withdraw funds from investment portfolio',
          children: [
            {
              value: 'lumpSum',
              label: 'Lump sum withdrawal',
            },
            {
              value: 'regular',
              label: 'Regular drawdowns',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
  ],
  [StrategyTypes.Debt]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'payDownLoan',
          label: 'Pay down loan',
          children: [
            {
              value: 'oneOff',
              label: 'One-off repayment',
            },
            {
              value: 'regular',
              label: 'Regular repayment',
            },
          ],
        },
        {
          value: 'reduceLoan',
          label: 'Reduce loan repayments',
          children: [
            {
              value: 'ongoing',
              label: 'Ongoing repayments',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'payDownLoan',
          label: 'Pay down loan',
          children: [
            {
              value: 'oneOff',
              label: 'One-off repayment',
            },
            {
              value: 'regular',
              label: 'Regular repayment',
            },
          ],
        },
        {
          value: 'reduceLoan',
          label: 'Reduce loan repayments',
          children: [
            {
              value: 'ongoing',
              label: 'Ongoing repayments',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'joint',
      label: 'Joint',
      children: [
        {
          value: 'payDownLoan',
          label: 'Pay down loan',
          children: [
            {
              value: 'oneOff',
              label: 'One-off repayment',
            },
            {
              value: 'regular',
              label: 'Regular repayment',
            },
          ],
        },
        {
          value: 'reduceLoan',
          label: 'Reduce loan repayments',
          children: [
            {
              value: 'ongoing',
              label: 'Ongoing repayments',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
  ],
  [StrategyTypes.Centrelink]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'centrelinkPayment',
          label: 'Apply for Centrelink payment',
          children: [
            {
              value: 'agePension',
              label: 'Age Pension',
            },
            {
              value: 'disabilitySupportPension',
              label: 'Disability Support Pension',
            },
            {
              value: 'newstartAllowance',
              label: 'Newstart Allowance',
            },
            {
              value: 'rentAssistance',
              label: 'Rent Assistance',
            },
          ],
        },
        {
          value: 'giftingStrategy',
          label: 'Gifting strategy',
          children: [
            {
              value: 'oneOff',
              label: 'One-off',
            },
            {
              value: 'ongoing',
              label: 'Ongoing',
            },
          ],
        },
        {
          value: 'funeralBond',
          label: 'Funeral Bond',
          children: [
            {
              value: 'new',
              label: 'New funeral bond',
            },
            {
              value: 'existing',
              label: 'Add to existing funeral bond',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'centrelinkPayment',
          label: 'Apply for Centrelink payment',
          children: [
            {
              value: 'agePension',
              label: 'Age Pension',
            },
            {
              value: 'disabilitySupportPension',
              label: 'Disability Support Pension',
            },
            {
              value: 'newstartAllowance',
              label: 'Newstart Allowance',
            },
            {
              value: 'rentAssistance',
              label: 'Rent Assistance',
            },
          ],
        },
        {
          value: 'giftingStrategy',
          label: 'Gifting strategy',
          children: [
            {
              value: 'oneOff',
              label: 'One-off',
            },
            {
              value: 'ongoing',
              label: 'Ongoing',
            },
          ],
        },
        {
          value: 'funeralBond',
          label: 'Funeral Bond',
          children: [
            {
              value: 'new',
              label: 'New funeral bond',
            },
            {
              value: 'existing',
              label: 'Add to existing funeral bond',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
    {
      value: 'joint',
      label: 'Joint',
      children: [
        {
          value: 'centrelinkPayment',
          label: 'Apply for Centrelink payment',
          children: [
            {
              value: 'agePension',
              label: 'Age Pension',
            },
            {
              value: 'disabilitySupportPension',
              label: 'Disability Support Pension',
            },
            {
              value: 'newstartAllowance',
              label: 'Newstart Allowance',
            },
            {
              value: 'rentAssistance',
              label: 'Rent Assistance',
            },
          ],
        },
        {
          value: 'giftingStrategy',
          label: 'Gifting strategy',
          children: [
            {
              value: 'oneOff',
              label: 'One-off',
            },
            {
              value: 'ongoing',
              label: 'Ongoing',
            },
          ],
        },
        {
          value: 'funeralBond',
          label: 'Funeral Bond',
          children: [
            {
              value: 'new',
              label: 'New funeral bond',
            },
            {
              value: 'existing',
              label: 'Add to existing funeral bond',
            },
          ],
        },
        {
          value: 'customStrategy',
          label: 'Custom Strategy',
        },
      ],
    },
  ],
  [StrategyTypes.Insurance]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'establish',
          label: 'Establish',
        },
        {
          value: 'retain',
          label: 'Retain',
        },
        {
          value: 'vary',
          label: 'Vary',
        },
        {
          value: 'cancel',
          label: 'Cancel',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'establish',
          label: 'Establish',
        },
        {
          value: 'retain',
          label: 'Retain',
        },
        {
          value: 'vary',
          label: 'Vary',
        },
        {
          value: 'cancel',
          label: 'Cancel',
        },
      ],
    },
  ],
  [StrategyTypes.EstatePlanning]: [
    {
      value: 'client',
      label: 'Client',
      children: [
        {
          value: 'powerOfAttorney',
          label: 'Power of Attorney',
          children: [
            {
              value: 'appoint',
              label: 'Appoint',
            },
            {
              value: 'review',
              label: 'Review',
            },
          ],
        },
        {
          value: 'will',
          label: 'Will',
          children: [
            {
              value: 'implement',
              label: 'Implement',
            },
            {
              value: 'review',
              label: 'Review',
            },
          ],
        },
        {
          value: 'superannuationBeneficiary',
          label: 'Superannuation beneficiary',
        },
        {
          value: 'funeralBond',
          label: 'Funeral Bond',
          children: [
            {
              value: 'invest',
              label: 'Invest',
            },
            {
              value: 'arrange',
              label: 'Arrange',
            },
          ],
        },
        {
          value: 'implementAdvanceCare',
          label: 'Implement an Advance Care',
          children: [
            {
              value: 'directive',
              label: 'Directive',
            },
            {
              value: 'plan',
              label: 'Plan',
            },
          ],
        },
        {
          value: 'changePension',
          label: 'Change pension beneficiary nomination',
        },
      ],
    },
    {
      value: 'partner',
      label: 'Partner',
      children: [
        {
          value: 'powerOfAttorney',
          label: 'Power of Attorney',
          children: [
            {
              value: 'appoint',
              label: 'Appoint',
            },
            {
              value: 'review',
              label: 'Review',
            },
          ],
        },
        {
          value: 'will',
          label: 'Will',
          children: [
            {
              value: 'implement',
              label: 'Implement',
            },
            {
              value: 'review',
              label: 'Review',
            },
          ],
        },
        {
          value: 'superannuationBeneficiary',
          label: 'Superannuation beneficiary',
        },
        {
          value: 'funeralBond',
          label: 'Funeral Bond',
          children: [
            {
              value: 'invest',
              label: 'Invest',
            },
            {
              value: 'arrange',
              label: 'Arrange',
            },
          ],
        },
        {
          value: 'implementAdvanceCare',
          label: 'Implement an Advance Care',
          children: [
            {
              value: 'directive',
              label: 'Directive',
            },
            {
              value: 'plan',
              label: 'Plan',
            },
          ],
        },
        {
          value: 'changePension',
          label: 'Change pension beneficiary nomination',
        },
      ],
    },
  ],
};
