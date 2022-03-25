function List({stories}) {

  return stories.map((item) => ( 
      <div key={item.objectID}>
      <span><a href={item.url}>{item.title}</a></span>
      <h2>{item.title}</h2>
      <p>{item.author}</p>
      <p>{item.num_comments}</p>
    </div>
  ));
}

export default List;