import styled, { css } from 'styled-components';
import { Button } from 'antd';

export const DocumentsWrapper = styled.section`
  padding: 20px;
  .header-step-document {
    margin-bottom: 65px;
    .ant-steps-item {
      &:hover {
        cursor: pointer;
      }
    }
    .ant-steps-item-process {
      .ant-steps-item-icon {
        background: #1790ff;
      }
      & > .ant-steps-item-content {
        & > .ant-steps-item-title {
          color: #515c83;
          font-weight: 600;
          &::after {
            background-color: #45a3ff;
          }
        }
        & > .ant-steps-item-description {
          color: #616a8e;
          max-width: 120px;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
    .ant-steps-item-finish {
      & > .ant-steps-item-content {
        & > .ant-steps-item-description {
          font-size: 12px;
          line-height: 14px;
          max-width: 120px;
        }
      }
    }
    .ant-steps-item-wait {
      .ant-steps-item-icon {
        border-color: #9ba2b8;
        & > .ant-steps-icon {
          color: #9ba2b8;
        }
      }
      & > .ant-steps-item-content {
        & > .ant-steps-item-title {
          color: #9ba2b8;
          &::after {
            background-color: #a3a9be;
          }
        }
        & > .ant-steps-item-description {
          color: #989fb6;
          font-size: 12px;
          line-height: 14px;
          max-width: 120px;
        }
      }
    }
  }
`;
export const StepActionDocument = styled.div.attrs({
  className: 'steps-action',
})`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
export const StepActionDocumentFixed = styled(StepActionDocument)`
  @media (max-height: 900px) {
    position: fixed;
    bottom: 32px;
    width: 200px;
    right: 65px;
  }
`;

export const BtnStepDocument = styled(Button).attrs({
  className: 'btn-step-document',
})`
  width: 85px;
  border-radius: 25px;
  margin-left: 15px;
  background-color: #000;
  border-color: #000;
  color: #fff;
  &:hover {
    opacity: 0.7;
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  &.ant-btn-primary {
    background-color: #192a6f;
    border-color: #192a6f;
  }
`;
export const BtnDoneDocument = styled(BtnStepDocument).attrs({
  className: 'btn-done-document',
})`
  width: 135px;
  position: fixed;
  bottom: 30px;
  right: 100px;
  z-index: 999;

  @media (max-height: 600px) {
    bottom: 25px;
    right: 80px;
  }
`;

export const StepWrapper = styled.section`
  padding: 0 33px;
  .documents-table {
    margin-bottom: 50px;
    &.documents-table-soa {
      .ant-table-tbody > tr {
        &.ant-table-row {
          vertical-align: top;
        }
      }
    }
    .ant-table-thead {
      background-color: #eceef1;
      & > tr {
        & > th {
          background-color: #ebeef1;
          color: #515c83;
          font-weight: 600;
          &.text-align-right {
            padding: 16px 30px 16px 0;
            text-align: right;
          }
          &.text-align-center {
            text-align: center;
          }
        }
      }
    }
    .ant-table-tbody {
      font-size: 13px;
      & > tr {
        & > td {
          color: #586388;
          &.text-align-right {
            textarea {
              text-align: right;
            }
            .strategy-item {
              .edit-cell {
                text-align: right;
                .ant-input-number-input {
                  text-align: right;
                }
              }
            }
          }
          &.text-align-center {
            text-align: center;
            .strategy-item {
              .edit-cell {
                text-align: center;
                .ant-input-number-input {
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
    &.expanded-table {
      // .ant-table-row-expand-icon-cell,
      // .ant-table-expand-icon-th {
      //   width: 0px;
      // }
      .ant-table-tbody > tr > td {
        border-bottom: none;
      }
      tr.ant-table-expanded-row {
        background-color: #fff;
        td {
          border-bottom: 1px solid #e8e8e8;
          padding: 0;
        }
        .strategy-item {
          margin: 16px;
        }
      }
    }
  }
  .strategy-item {
    width: 100%;
    .edit-cell {
      width: 100%;
      text-align: left;
      font-weight: normal;
      padding: 0 10px;
      margin-left: -10px;
    }
  }
  .strikethrough {
    .strategy-item {
      .ant-input {
        text-decoration: line-through;
      }
    }
  }
  .underline {
    .strategy-item {
      .ant-input.edit-cell {
        text-decoration: underline;
      }
    }
  }
  .goal-table {
    .ant-table-thead {
      & > tr {
        & > th {
          padding: 12px;
        }
      }
    }
    .ant-table-tbody {
      & > tr {
        & > td {
          vertical-align: baseline;
          padding: 12px 5px;
        }
      }
      .strategy-item {
        .edit-cell {
          margin-left: 0px;
          padding: 0 8px;
        }
        .ant-select {
          width: 100%;
          font-weight: normal;
          &-selection__rendered {
            padding: 0 8px;
          }
        }
        input {
          font-weight: normal;
        }
      }
      td.invalid {
        .strategy-item {
          .ant-input,
          .ant-select {
            color: #f44336 !important;
          }
        }
      }
    }
    .tag-list {
      padding-left: 8px;
    }
  }
`;

export const TitleStep = styled.div.attrs({
  className: 'document-title-step',
})<{ editable?: boolean }>`
  color: #515c83;
  font-weight: 600;
  width: 100%;
  display: inline-block;
  font-size: 16px;
  padding: 2px 10px;
  margin: 0 0 0 -10px;

  .ant-input {
    &.edit-cell.text {
      margin: 0 0 0 -10px;
      font-size: 16px;
      font-weight: 600;

      ${(props: any) =>
        props.editable &&
        css`
          &:hover {
            border-color: #dcdcdc;
          }
        `}
    }
    &-disabled {
      &.edit-cell.text {
        cursor: default;
        background: transparent;
        &:hover {
          border-color: transparent;
        }
      }
    }
  }
`;

export const TitleStepSmall = styled.div.attrs({
  className: 'document-title-step-small',
})<{ editable?: boolean }>`
  color: #9096af;
  font-size: 13px;
  width: 100%;
  display: inline-block;
  padding: 2px 10px;
  margin: 0 0 10px -10px;

  .ant-input {
    &.edit-cell.text {
      margin: 0 0 10px -10px;
      color: #9096af;

      ${(props: any) =>
        props.editable &&
        css`
          &:hover {
            border-color: #dcdcdc;
          }
        `}
    }
    &-disabled {
      &.edit-cell.text {
        cursor: default;
        background: transparent;
        &:hover {
          border-color: transparent;
        }
      }
    }
  }
`;

export const DocumentSwitcherWrapper = styled.div`
  margin-bottom: 50px;
`;
