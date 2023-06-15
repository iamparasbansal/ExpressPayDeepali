import React ,{Component}from 'react'
import Spinner from './Spinner';

export class News extends Component{
 
  constructor()
    {
        super();
        console.log("Hello constructor");
        this.state={
          articles: [],
          loading: false,
          page:1
        }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cce2a3b1811f46e396b6970cb5867c67&page=1&pageSize=12"
      this.setState({loading:true});
      let data =await fetch(url);
      let parsedData= await data.json()
      this.setState({articles:parsedData.articles,totalArticles : parsedData.totalResult,loading:false})
    }
    handlePrevClick= async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cce2a3b1811f46e396b6970cb5867c67&page=${this.state.page + 1}&pageSize=12`
      this.setState({loading:true});
      let data =await fetch(url);
      let parsedData= await data.json()
         this.setState({
             page: this.state.page - 1,
             articles:parsedData.articles,
             loading:false
         })


  
    }
    handleNextClick= async ()=>{
      if (!(this.state.page+1>Math.ceil(this.state.totalResults/12)))
    {
         
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cce2a3b1811f46e396b6970cb5867c67&page=${this.state.page + 1}&pageSize=12`
      this.setState({loading:true});
      let data =await fetch(url);
      let parsedData= await data.json()
         this.setState({
             page: this.state.page + 1,
             articles:parsedData.articles,
             loading:false
         })
    }
  }
//   render(){
//   return (
//     <div className='container my-3'>
//       <h1 className='text-center' className="newshead">Express News - Top Headlines</h1>
//      {this.state.loading && <Spinner/>}
//       <div className='row' >
//       {!this.state.loading  && this.state.articles.map((element)=>{ return <div className='col-md-4' key ={element.url}>
//       <NewsItems title={element.title?element.title.slice(0,18):""} description={element.description?element.description.slice(0,50):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//       </div>
//       })}
//       </div>
//       <div className='Buttoncontainer'>
//       <div className="contact_form_button">
//     <button disabled={this.state.page<=1} type="submit" className="prev_news_button" onClick={this.handlePrevClick} >&larr; Previous</button>
//        </div>
//        <div className="contact_form_button">
//     <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/12)} type="submit" className=" next_news_button" onClick={this.handleNextClick} >Next &rarr;</button>
//        </div>

//       </div>
//     </div>
//   )
// }


render() {
  return (
    <div className='container my-3'>
      <h1 className='text-center newshead'>Express News - Top Headlines</h1>
      {this.state.loading && <Spinner />} {/* Replace Spinner with your loading indicator */}
      <div className='row'>
        {!this.state.loading && this.state.articles.map((element) => (
          <div className='col-md-4' key={element.url}>
            <div className="news-item">
              <img src={element.urlToImage} alt="News" className="news-image" />
              <div className="news-content">
                <h2 className="news-title">{element.title ? element.title.slice(0, 18) : ""}</h2>
                <p className="news-description">{element.description ? element.description.slice(0, 50) : ""}</p>
                <a href={element.url} className="read-more">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='Buttoncontainer'>
        <div className="contact_form_button">
          <button disabled={this.state.page <= 1} type="submit" className="prev_news_button" onClick={this.handlePrevClick}>&larr; Previous</button>
        </div>
        <div className="contact_form_button">
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} type="submit" className="next_news_button" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    </div>
  )
}

}

export default News
