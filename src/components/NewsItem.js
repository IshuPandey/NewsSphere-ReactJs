import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <a rel="noreferrer" href={newsUrl} target="_blank"  style={{color:'black',textDecoration:"none" }}>

            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://img.freepik.com/free-vector/technology-background-with-earth-circuit-diagram_1017-19385.jpg?w=900&t=st=1680875032~exp=1680875632~hmac=32ae6e84e55da09b011022d911333c59995df6b74ff3da00301eae5bac459c10" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        {/* <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}
                    </div>
                </div>
            </div>
                        </a>
        )
     
}

export default NewsItem
