import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

function CategoryCard(props) {
  const fixDate = (date) => {
    const year = date.substr(0, 4)
    const month = date.substr(5, 2)
    const day = date.substr(8, 2)
    return month + '/' + day + '/' + year
  }

  // const digitsOnly = /^[0-9]*\.?[0-9]*$/g
  // const digitsOnly = /^[0-9]*\.?[0-9]*$/g
  const digitsOnly = /\d+/g

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
      sorter: (a, b) => {
        return a.price.match(digitsOnly) - b.price.match(digitsOnly)
      },
      render: (price) => <>${price.match(digitsOnly)}</>,
    },
    {
      title: 'Date Added',
      dataIndex: 'dateAdded',
      key: 'dateAdded' + props.index,
      sorter: (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded),
      render: (date) => <>{date ? fixDate(date) : ''}</>,
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

export default CategoryCard
