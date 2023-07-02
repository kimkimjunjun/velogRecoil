import React from 'react'
import PostTitle from '../../components/posting/PostTitle'
import BasePost from '../../components/posting/BasePost'
import RcPosting from '../../components/posting/RcPosting'
import AfterHeader from '../../components/after/AfterHeader'

function AfterRecent() {
  return (
    <div>
        <AfterHeader>
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
          <RcPosting />
          <RcPosting />
        </BasePost>
        </AfterHeader>
    </div>
  )
}

export default AfterRecent;