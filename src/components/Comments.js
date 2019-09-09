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
      let time = new Date();
      let simpleTime = time.toLocaleTimeString();
      if(this.state.comment) {
        this.props.addComment(this.props.boardId, this.state.comment, this.props.taskId, simpleTime)
      }
      this.setState({comment: ''})
    }
    render() {
      console.log(this.props.comments)
      let comments = this.props.comments
      return (
        <div>
          <div>
            <form onSubmit={this.addComment}>
              <input 
                type="text" 
                placeholder="add your comment" 
                value={this.state.comment} 
                onChange={this.onChangeComment} 
                style={{border: '1px solid cornflowerblue', padding: 4, borderRadius: 20, outline: 'none'}}
              />
              <button 
                type="submit"
                style={{background: this.state.comment ? 'cornflowerblue' : '#C0C0C0', color: '#fff', border: 'none', padding: '4px', borderRadius: 20, marginLeft: 5}}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div style={{margin: 10, paddingBottom: 5}}>
            <span style={{fontSize: 12, fontWeight: 600}}>Comments:</span>
            {
              comments.allComments && comments.allComments.map( ({boardId, comment, taskId, commentId, time}) => {
                return (
                  taskId === this.props.taskId &&
                  <div key={commentId} style={{marginLeft: 5}}>
                    <span style={{fontSize: 10}}>{comment} ... {time}</span>
                  </div>  
                ) 
                  
              })
            }
          </div>
          <hr />
        </div>
      )
    }
}

export default Comments