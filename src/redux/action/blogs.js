export const GET_BLOGPOST = 'GET_BLOGPOST'
export const GET_BLOG_DETAIL = 'GET_BLOG_DETAIL'
export const GET_POST_IMAGE = 'GET_POST_IMAGE'

export const getImage = (image) => ({
  type: GET_POST_IMAGE,
  payload: image,
})

export const getBlogpost = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/blogposts/getall')
      if (res.ok) {
        const data = await res.json()
        console.log(data.content)
        dispatch({
          type: GET_BLOGPOST,
          payload: data.content,
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

export const postImage = (id_post, formImg, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'http://localhost:3001/blogposts/' + id_post + '/image',
        {
          method: 'POST',
          body: formImg,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      console.log('Error', error)
    }
  }
}
