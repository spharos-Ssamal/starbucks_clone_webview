import React, { useReducer, useState } from 'react'
import Head from "next/head";
import SearchHashtagButton from '@/components/page/search/searchHashtagButton';

interface logDataType {
  count: number,
  logInfo: searchLogType[]
}

export interface searchLogType {
  id : number,
  logName: string,
  isDuplicate?: boolean,
  link?: string
}

const initialState = {
  count: 0,
  logInfo: [],
}


export default function search() {

  // add
  // delete
  // 10개 이상 기록 삭제 -> FIFO ???
  // 중복데이터는 무시 return state --> ??
  // listing 객체 
  // reduce 는텍스트 합치는 개념. 
  
  return (
    <>
    <Head>
      <title>검색어를 입력해 주세요</title>
    </Head>
    <div className="search-top">
        <div className="search-bar">
            <form>
                <input type="text" 
                  placeholder="검색어를 입력해 주세요." 
                />
                <div className="search-icons">
                    <ul>
                      <div>
                        <li><img src="assets/images/icons/search.svg" /></li>
                      </div>
                        <li><img src="assets/images/icons/close.png" /></li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
    <div className="search-latest">
        <div className="search-latest-title">
            <h3>최근 검색어</h3>
        </div>
        <div className="search-latest-keywords">
        </div>
        <hr />
        <div className="delete-keywords">
            <button>전체삭제</button>
        </div>
    </div>

    <div className="recommand-tag">
        <div className="recommand-tage-title">
            <h3>추천 태그</h3>
        </div>
        <div className="tag-list">
            <SearchHashtagButton tagTitle={'test'} />
        </div>
    </div>
    </>
  )
}
