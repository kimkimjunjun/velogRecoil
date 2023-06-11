import React from 'react'
import Header from '../components/Header'
import PostTitle from '../components/posting/PostTitle'
import BasePost from '../components/posting/BasePost'
import RcPosting from '../components/posting/RcPosting'

function Recentpg() {
  return (
    <div>
        <Header>
            <PostTitle/>
            <BasePost>
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
          <RcPosting />
        </BasePost>
        </Header>
    </div>
  )
}

export default Recentpg