// @flow 
import * as React from 'react';
import { Card, List } from 'antd';
const EtbsListe= () => {
    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
      ];

    return (
        <div>
            
              <List
    grid={{
      gutter: 16,
      column: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
        </div>
    );
};
export default EtbsListe ;