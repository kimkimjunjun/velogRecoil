import React from 'react'
import Header from '../../components/Header'
import AfterHeader from '../../components/after/AfterHeader'
import PostTitle from '../../components/posting/PostTitle'
import Week from '../../components/posting/Week'
import BasePost from '../../components/posting/BasePost'
import Posting from '../../components/posting/Posting'

function Afterpg() {
  return (
    <div>
      <AfterHeader>
        <PostTitle>
          <Week />
        </PostTitle>
        <BasePost>
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
        </BasePost>
      </AfterHeader>
    </div>
  )
}

export default Afterpg