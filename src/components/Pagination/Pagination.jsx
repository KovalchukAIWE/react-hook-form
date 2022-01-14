import { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Pagination, TextField, Stack, Link } from '@mui/material'

const BASE_URL = "http://hn.algolia.com/api/v1/search?";

const PaginationApp = () => {

  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(
      ({data}) => {
      console.log(data)
      setPosts(data.hits)
      setPageQty(data.nbPages)

      if (data.nbPages < page) {
        setPage(1)
      }
      }
    )
  }, [query, page]);

  return (
    <Container sx={{marginTop: 5}} maxWidth='md'>
      <TextField 
        fullWidth
        label='query'
        value={query}
        onChange={(event) => setQuery(event.target.value)} 
      />
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination 
            count={pageQty} // how much pages
            page={page} // current page
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            sx={{marginY: 3, marginX: 'auto'}}
          />
        )}
        {
          posts.map(post =>(
            <Link
              key={post.objectID}
              href={post.url}>
              {post.title || post.story_title}
            </Link>
          ))
        }
      </Stack>
    </Container>
  );
}

export default PaginationApp;
