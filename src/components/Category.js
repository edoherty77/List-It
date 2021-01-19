import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

function Category(props) {
  // console.log('PROPS index: ', props.index)
  const columns = [
    {
      title: 'Item',
      dataIndex: 'title',
      key: 'title' + props.index,
      width: 150,
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price' + props.index,
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.price - b.price,
      render: (dataIndex) => <p>${dataIndex}</p>,
    },
    {
      title: 'Date Added',
      dataIndex: 'dateAdded',
      key: 'dateAdded' + props.index,
      sorter: (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded),
      render: (date) => <>{date ? date.substr(0, 10) : ''}</>,
    },
  ]
  return (
    <div className="table">
      <h2 className="table-title">{props.title}</h2>
      <Table
        key={props.index}
        onRow={(item) => ({
          style: { cursor: 'pointer' },
          onClick: () => props.history.push(`/items/${item._id}`),
        })}
        columns={columns}
        dataSource={props.items}
        pagination={false}
      />
    </div>
  )
}

export default Category
