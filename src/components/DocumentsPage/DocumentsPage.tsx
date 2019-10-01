import React from 'react';
import { Steps, Button, message } from 'antd';
import DocumentsCard from './DocumentsCard/DocumentsCard';
import DocumentsCarousel from './DocumentsCarousel/DocumentsCarousel';
import { DocumentsWrapper,
  StepActionDocument,
  BtnStepDocument,
 } from './styled';
const { Step } = Steps;
const steps = [
  {
    title: 'Step 1',
    content:'Step 1',
    description: 'Reason for seeking advice',
  },
  {
    title: 'Step 2',
    content: <DocumentsCarousel />,
    description: 'What the advice cover',
  },
  {
    title: 'Step 3',
    content: 'Last-content',
    description: 'What the advice does not cover',
  },
  {
    title: 'Step 4',
    content: 'First-content',
    description: 'Client is goals',
  },
  {
    title: 'Step 5',
    content: 'Second-content',
    description: 'Limitations of client is information',
  },
  {
    title: 'Step 6',
    content: 'Last-content',
    description: 'Summary of recommendation',
  },
  {
    title: 'Step 7',
    content: 'Last-content',
    description: 'Cost of advice',
  },
  {
    title: 'Step 8',
    content: 'Last-content',
    description: 'Cost of advice',
  },
];

export interface DocumentsPageProps {
  current?: string;
  className?: string;
}
export interface DocumentsPageState {
  currentStep: number;
}

class DocumentsPage extends React.PureComponent<DocumentsPageProps, DocumentsPageState> {
  constructor(props: DocumentsPageProps) {
    super(props);

    this.state = {
      currentStep: 0,
    };
  }

  public next() {
    const currentStep = this.state.currentStep + 1;
    this.setState({ currentStep });
  }

  public prev() {
    const currentStep = this.state.currentStep - 1;
    this.setState({ currentStep });
  }

  public render(): JSX.Element {
    const { currentStep } = this.state;
    return (
      <DocumentsWrapper>
        <Steps size="small" current={currentStep} className="header-step-document">
          {steps.map(item => (
            <Step key={item.title} description={item.description} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[currentStep].content}</div>

        <StepActionDocument>
          {currentStep > 0 && (
            <BtnStepDocument onClick={() => this.prev()}>
              Back
            </BtnStepDocument>
          )}
          {currentStep < steps.length - 1 && (
            <BtnStepDocument type="primary" onClick={() => this.next()}>
              Next
            </BtnStepDocument>
          )}
          {currentStep === steps.length - 1 && (
            <BtnStepDocument type="primary" onClick={() => message.success('Processing complete!')}>
              Submit
            </BtnStepDocument>
          )}
        </StepActionDocument>
    </DocumentsWrapper>
    );
  }
}

export default DocumentsPage;
