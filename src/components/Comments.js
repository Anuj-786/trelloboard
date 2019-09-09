import React, { Component } from 'react'

class Comments extends Component {
    state = {
      comment: ''
    }

    componentDidMount() {
      let comments = JSON.parse(localStorage.getItem('comments'))
      if(comments) {
        this.props.getComments(comments)
      }
      else {
        this.props.getComments([])
      }
    }

    onChangeComment = (e) => {
      this.setState({comment: e.target.value}) 
    }
    
    addComment = (e) => {
      e.preventDefault()
      this.props.addComment(this.props.boardId, this.state.comment, this.props.taskId)
    }
    render() {
      console.log(this.props.comments)
      let comments = this.props.comments
      return (
        <div>
          <span style={{fontSize: 12}}>Comments</span>
          {
            comments.allComments && comments.allComments.map( ({boardId, comment, taskId, commentId}) => {
              return (
                taskId === this.props.taskId &&
                <div key={commentId}>
                  <span style={{fontSize: 10}}>{comment}</span>
                </div>  
              ) 
                
            })
          }
          <form onSubmit={this.addComment}>
            <input type="text" value={this.state.comment} onChange={this.onChangeComment} />
            <button type="submit">Add Comments</button>
          </form>
        </div>
      )
    }
}

export default Comments