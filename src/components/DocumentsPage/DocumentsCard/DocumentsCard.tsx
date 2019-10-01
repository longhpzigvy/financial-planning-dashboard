import React from 'react';
import { Card } from 'antd';

export interface DocumentsCardProps {
  title?: string;
  extra?: string;
}

class DocumentsCard extends React.PureComponent<DocumentsCardProps> {
  public render(): JSX.Element {
    return (
      <div>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
    </div>
    );
  }
}

export default DocumentsCard;
