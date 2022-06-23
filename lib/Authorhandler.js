import axios from "axios";

export async function getAllAuthor() {






  
  axios.defaults.headers["X-ACCESS-ID"] =
  "ef74855d-e9d1-41ea-9823-f295ebbad24e";
axios.defaults.headers.Authorization = "Bearer stbbcKp8sdtAjcaxYrPBFdyP";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Accept"] = "*/*";

const url = "https://api.bookstore.griter.io/api/v1/authors";
const resp = await axios.get(url);
if(!resp){
  // console.log("errorerrorerror")
}else{
  // console.log("successfullllllllllllll")
}
let respondData = [];
if ( resp.data.authors.length > 0) {
// console.log(resp.data.authors, "resp");


respondData = resp.data.authors.map(
  (obj) =>
    (obj = {
      id: obj.id,
      name: obj.name,
      created_at: obj.created_at,
      updated_at: obj.updated_at,
    })
);


  }else{
    respondData = "abc"
  }

  return respondData;


  // const transformedQuotes = [];

  // for (const key in data) {
  //   const quoteObj = {
  //     id: key,
  //     ...data[key],
  //   };

  //   transformedQuotes.push(quoteObj);
  // }

  // return transformedQuotes;
}

export async function editAuthorHandler(authorId) {
  

  axios.defaults.headers["X-ACCESS-ID"] =
    "ef74855d-e9d1-41ea-9823-f295ebbad24e";
  axios.defaults.headers.Authorization = "Bearer stbbcKp8sdtAjcaxYrPBFdyP";
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.headers["Accept"] = "*/*";

  

  

  const url = `https://api.bookstore.griter.io/api/v1/books`;
  //   const data = {author_id:{authorId} };
  const resp = await axios.get(url, { params: { author_id: authorId } });

  let authorData = [];
  if ( resp.data.books.length > 0) {
    authorData = resp.data.books.map((book) => ({
      seriesId: book.id,
      title: book.title,
      authorId: book.author_id,
      genre: book.genre.name,
      published_year: book.published_year,
      published_year: book.published_year,
      fiction: book.fiction,
    }));
    //   console.log(resp.data.books[0].genre, "resp books");
    // console.log(authorData, "authorData");
  } else {
    authorData = {authorId:authorId ,empty:true}
  }

  return authorData;

}

export async function addQuote(quoteData) {


  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData,quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.id}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
