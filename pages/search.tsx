import React, { useReducer, useState } from 'react'
import Head from "next/head";
import SearchHashtagButton from '@/components/page/search/searchHashtagButton';
import DeletableSearchLog from '@/components/page/search/DeletableSearchLog';

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


const reducer = (state: logDataType, action: any ) => {
  switch(action.type) {
    case 'add-log':
      const search = action.payload.name;
      const newSearch = {
        id: Date.now(),
        logName: search,

      }
      return { //Switch 에서 중복조건 삼항연산자??
        count: state.count + 1,
        logInfo: [...state.logInfo, newSearch ]
      }

    case 'delete-log':
      return{
        count: state.count - 1,
        logInfo: state.logInfo.filter(
          (a) => a.logName ! == action.payload.logName
        )
      }
      
  default:
    return state;

};
}

const initialState = {
  count: 0,
  logInfo: [],
}


export default function search(props: { logName: string, link: string }) {
  
  const [ keyword, setKeyword ] = useState<string>('');
  const [ searchLog, dispatch ] = useReducer(reducer, initialState);
  
  // add
  // delete
  // 10개 이상 기록 삭제 -> FIFO ???
  // 중복데이터는 무시 return state --> ??
  
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
                  value={keyword}
                  onChange = {(e => setKeyword(e.target.value))}
                />
                <div className="search-icons">
                    <ul>
                      <div onClick={() => {dispatch({type: 'add-log', payload: {keyword} }) }}>
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
          {
            searchLog.logInfo.map((item: { logInfo: searchLogType; }) => {
              return (
                <DeletableSearchLog key={item.logInfo.id} logName={item.logInfo.logName} dispatch={dispatch} />

              )
            })
          }
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
