export const GET_BLOGPOST = 'GET_BLOGPOST'
export const GET_BLOG_DETAIL = 'GET_BLOG_DETAIL'
export const GET_POST_IMAGE = 'GET_POST_IMAGE'
export const POST_BLOGPOST = 'POST_BLOGPOST'
export const PUT_BLOGPOST = 'PUT_BLOGPOST'
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST'

export const getImage = (image) => ({
  type: GET_POST_IMAGE,
  payload: image,
})

export const getBlogpost = (page) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:3001/blogposts/getall?page=${page}`
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: GET_BLOGPOST,
          payload: data,
        })
        console.log('List of blogposts has been load correctly!')
      } else {
        throw new Error('List of blogposts is fail!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const getBlogDetail = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/blogposts/detail/' + id)
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: GET_BLOG_DETAIL,
          payload: data,
        })
        console.log('Detail has been load correctly')
      } else {
        throw new Error('Detail load is fail')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const postImage = async (id_post, formImg, token) => {
  try {
    const res = await fetch(
      `http://localhost:3001/blogposts/${id_post}/image`,
      {
        method: 'POST',
        body: formImg,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    if (res.ok) {
      return null
    } else {
      throw new Error('Failed to upload image')
    }
  } catch (error) {
    console.log('Error', error)
  }
}

export const postBlogpost = (blogpost, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/blogposts/create', {
        method: 'POST',
        body: JSON.stringify(blogpost),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_BLOGPOST,
          payload: data,
        })
        alert('Blogpost salvato con successo!')
      } else {
        throw new Error('Blogpost creation is failed!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const updateBlogpost = (id, updateBlogpost, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/blogposts/' + id, {
        method: 'PUT',
        body: JSON.stringify(updateBlogpost),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data.content)
        dispatch({
          type: PUT_BLOGPOST,
          payload: data.content,
        })
        alert('Blogpost modificato con successo!')
      } else {
        throw new Error('Error while updating the blogpost')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const deleteBlogpost = (id, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/blogposts/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.ok) {
        dispatch({
          type: DELETE_BLOGPOST,
          payload: id,
        })
      } else {
        throw new Error('Error in deleting the blogpost!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}
