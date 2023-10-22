import React, { useEffect } from 'react'
import './Blog.css'
import Bannar from '../Bannar/Bannar'
import { Helmet } from 'react-helmet-async';
import News from './../News/News';
import news4 from '../../Assets/news4.jpg'
import news5 from '../../Assets/news5.jpg'
import doc1 from '../../Assets/doc6.jpeg'
import doc2 from '../../Assets/bestdoc2.jpeg'
import doc3 from '../../Assets/doc7.jpeg'
import NewsCart from '../News/NewsCart';
export default function Blog() {
  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return <>
     <Helmet>
        <title>Blog</title>
      </Helmet>
  <Bannar title='Blog'/>
<News/>
<div className="row g-4 my-3" id='rowNews'>
<NewsCart newsImg={news4} doc={doc1} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  <NewsCart newsImg={news5} doc={doc2} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  <NewsCart newsImg={news4} doc={doc3} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  <NewsCart newsImg={news5} doc={doc3} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  <NewsCart newsImg={news4} doc={doc1} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  <NewsCart newsImg={news5} doc={doc2} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  </div>
  
  
  
  </>
  
}
