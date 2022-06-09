import InfiniteScroll from 'react-infinite-scroller';

function PhotoList(props) {
    return (
        <div className="container">
            <InfiniteScroll
                pageStart={0}
                loadMore={props.loadMore}
                hasMore={true}
                loader={
                   <p key="0">Loading more photos...</p>
                }
            >
            <div className="card-columns">
            {
                props.photoList.map(pic => {
                    return (
                        <div className="card border-0" key={pic.id}>
                            <img className="card-img" 
                                 src={pic.urls.small} 
                                 alt={pic.alt_description}
                            />
                            <div className="card-img-overlay photo-list" style={{color: 'white'}}>
                                <div className="img-header">
                                    <img className="rounded-circle profile-img"
                                         src={pic.user.profile_image.small} 
                                         alt={pic.user.username}/>
                                    <h6 className="card-title">
                                        {pic.user.name}
                                    </h6>
                                    <button className="btn-custom border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }) 
            }
            </div>
            </InfiniteScroll>
        </div>
    );
}

export default PhotoList;