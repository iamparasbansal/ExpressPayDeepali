import React ,{Component}from 'react'

export class NewsItems extends Component{
    
    render()
    {
        let {title,description,imageUrl,newsUrl}=this.props;
        return(
            <div className='my-3'>
                <div className="card" style={{width :"18rem"}}>
                    <img src={imageUrl? imageUrl:"https://www.reuters.com/resizer/JzurmsuJa24-nQYVEiFpjypa1bs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IAR4LDOQDNM2JPUOQ5MUTNR6B4.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <div className="contact_form_button">
                        <a href={newsUrl} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}  className="button contact_submit_button ">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems;
