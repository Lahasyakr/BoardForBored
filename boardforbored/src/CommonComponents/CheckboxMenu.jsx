import React from "react";
import { FilterFilled } from '@ant-design/icons';
import { Checkbox, Popover, Icon, Button, Row, Col } from "antd";
import '../CSS/checkbox.css'


class CheckboxMenu extends React.Component {
  state = {
    icon: {},
    selectedItems: []
  };

  componentDidMount = () => {
    if (this.props.value && this.props.value.length) {
      this.setState(
        {
          selectedItems: [...this.props.value]
        },
        () => this.checkIconFilled()
      );
    }
  };

  onChange = selection => {
    this.setState({ selectedItems: [...selection] }, () => {
      this.checkIconFilled();
    });

    return this.props.onChange(selection);
  };

  checkIconFilled = () => {
    if (this.state.selectedItems.length) {
      this.setState({ icon: { theme: "filled" } });
    } else {
      this.setState({ icon: {} });
    }
  };

  checkboxRender = () => {
    const _this = this;

    const groups = this.props.options
      .map(function (e, i) {
        return i % 10 === 0 ? _this.props.options.slice(i, i + 10) : null;
      })
      .filter(function (e) {
        return e;
      });

    console.log(groups);

    return (
      <Checkbox.Group className="checkboxFilter" onChange={this.onChange} value={this.state.selectedItems}>
        <Row>
          {groups.map((group, i) => {
            return (
              <Col
                key={"checkbox-group-" + i}
                span={Math.floor(24 / groups.length)}
              >
                {group.map((label, i) => {
                  return (
                    <Checkbox
                      key={label}
                      value={label}
                      style={{ display: "flex" ,padding:'6px'}}
                    >
                      {label}
                    </Checkbox>
                  );
                })}
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
    );
  };

  render() {
    const CheckboxRender = this.checkboxRender;
    return (
      <Popover
        content={<CheckboxRender />}
        trigger="click"
        placement="bottomLeft"
      >
        <button>
          <div className="flex">
            {this.props.isFilter ? <div className="justify-between items-stretch border bg-white flex gap-5 px-4 py-2 rounded-xl border-solid border-gray-300">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c99497fbd15949f952124ea0a5eefb6ef5328925a15a0af31fe239ccba1bba0e?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                alt=""
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab00e2e58a5c4aa1eb39d3306e0b3d5cdeb764ca4b33fa1a2be773aea2c7948?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-[2] object-contain object-center w-3 stroke-[1px] stroke-gray-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                alt=""
              /></div>
              : <div className="justify-between items-stretch border bg-white flex gap-5 px-4 py-2 rounded-xl border-solid border-gray-300"><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e345557854dde4474c372c2091c517b3c2dc0c9be694224845bf7b3d33edf5bd?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                alt=""
              />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab00e2e58a5c4aa1eb39d3306e0b3d5cdeb764ca4b33fa1a2be773aea2c7948?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                  className="aspect-[2] object-contain object-center w-3 stroke-[1px] stroke-gray-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  alt=""
                /></div>}
          </div>

        </button>
      </Popover>
    );
  }
}

export default CheckboxMenu;
