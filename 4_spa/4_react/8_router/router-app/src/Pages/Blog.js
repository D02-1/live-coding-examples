const Blog = ({ active }) =>
{
    return(
        <div>
            <h1>Blog</h1>

            {
                active ?
                <p>Hier finden sie unseren Blog</p>
                :
                <p>Dieser Blog ist Inaktiv!</p>
            }
            
        </div>
    )
}

export default Blog;
