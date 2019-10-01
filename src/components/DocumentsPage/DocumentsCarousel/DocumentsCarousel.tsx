import React from 'react';
import { Carousel } from 'antd';

export interface DocumentsCarouselProps {
  effect?: string;
  dotPosition?: string;
}

class DocumentsCarousel extends React.PureComponent<DocumentsCarouselProps> {
  public render(): JSX.Element {
    return (
      <Carousel effect="fade" dotPosition={'left'}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}

export default DocumentsCarousel;
