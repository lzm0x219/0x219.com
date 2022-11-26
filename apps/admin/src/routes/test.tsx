import { Button, Space, Input } from "antd";

export default function Test() {
  return (
    <div className="p-10">
      <Space wrap={true}>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="primary" danger={true}>
          Primary Button
        </Button>
      </Space>

      <div className="p-10">
        <Space direction="vertical">
          <Input placeholder="xxx" />

          <Input
            addonBefore="http://"
            addonAfter=".com"
            defaultValue="mysite"
          />
        </Space>
      </div>
    </div>
  );
}
