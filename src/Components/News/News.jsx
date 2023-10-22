import React from 'react'
import './News.css'
import news1 from '../../Assets/news1.jpg'
import news2 from '../../Assets/news2.jpg'
import news3 from '../../Assets/news3.jpg'
import doc1 from '../../Assets/doc7.jpeg'
import doc2 from '../../Assets/bestdoc2.jpeg'
import doc3 from '../../Assets/doc6.jpeg'
import NewsCart from './NewsCart'


export default function News() {
  return <>

<section id='news'>
<h4 className='sec-title mx-auto'>Latest News</h4>
  <h3 className='text-center'>Our Latest News</h3>

  <div className="row g-4 my-3" id='rowNews'>
  <NewsCart newsImg={news1} doc={doc1} docName='John deo' date='21 July 2023' title='In this hospital there are special surgeon'/>
  <NewsCart newsImg={news2} doc={doc2} docName='Peter Packer' date='20 July 2023' title='Can you get a diflucan prescription online?'/>
  <NewsCart newsImg={news3} doc={doc3} docName='Mohamed Ali' date='18 July 2023' title='Why Is Skin Surgeon Considered Underrated'/>
  </div> 
</section>
  
  
  
  </>
  
}
