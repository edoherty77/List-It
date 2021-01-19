import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import CategoryModel from '../models/category'

import { Row, Col } from 'antd'

const Home = (props) => {
  const [categories, setCategories] = useState('')

  const fetchData = () => {
    CategoryModel.all().then((data) => setCategories(data.category))
  }

  useEffect(() => {
    fetchData()
  }, [])

  let categoryList = []
  if (categories) {
    categoryList = categories.map((category, index) => {
      // console.log('CATEGORY: ', category)
      return (
        <Col>
          <Category key={index} index={index} {...category} {...props} />
        </Col>
      )
    })
  }
  return (
    <div className="home">
      <h1 className="header">Welcome to List-It</h1>
      <Row className="row">
        {categoryList[0]}
        {categoryList[1]}
      </Row>
      <Row className="row">
        {categoryList[2]}
        {categoryList[3]}
      </Row>
      <Row className="row">
        {categoryList[4]}
        {categoryList[5]}
      </Row>
      <Row className="row">
        {categoryList[6]}
        {categoryList[7]}
      </Row>
    </div>
  )
}

export default Home