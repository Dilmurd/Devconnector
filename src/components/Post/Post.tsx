
import type React from "react"

import { useState } from "react"
import "./Post.scss"

interface Post {
  id: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  date: string
  likes: number
  dislikes: number
  discussionCount: number
}

const PostCard = ({
  id,
  content,
  author,
  date,
  likes,
  dislikes,
  discussionCount,
  onEdit,
  onDelete,
  onLike,
  onDislike,
}: Post & {
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  onLike: (id: string) => void
  onDislike: (id: string) => void
}) => {
  return (
    <div className="post-card">
      <div className="post-avatar">
        <img
          src={
            author.avatar ||
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2iYYurUJHqI6z1TxXkLniEngglbZ9v.png"
          }
          alt={`${author.name}'s avatar`}
        />
      </div>
      <div className="post-content">
        <div className="post-header">
          <div>
            <h3 className="author-name">{author.name}</h3>
            <span className="post-date">Posted on {date}</span>
          </div>
          <div className="post-actions-edit">
            <button className="action-btn edit" onClick={() => onEdit(id)}>
              <i className="fas fa-edit"></i>
              <span className="sr-only">Edit</span>
            </button>
            <button className="action-btn delete" onClick={() => onDelete(id)}>
              <i className="fas fa-trash"></i>
              <span className="sr-only">Delete</span>
            </button>
          </div>
        </div>
        <p className="post-text">{content}</p>
        <div className="post-actions">
          <button className="action-btn like" onClick={() => onLike(id)}>
            <i className="fas fa-thumbs-up"></i>
            <span>{likes}</span>
          </button>
          <button className="action-btn dislike" onClick={() => onDislike(id)}>
            <i className="fas fa-thumbs-down"></i>
            <span>{dislikes}</span>
          </button>
          <button className="action-btn discussion">
            <i className="fas fa-comment"></i>
            <span>Discussion {discussionCount > 0 && <span className="count">{discussionCount}</span>}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      content: "Just joined this community! Looking forward to connecting with everyone.",
      author: {
        name: "John Doe",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2iYYurUJHqI6z1TxXkLniEngglbZ9v.png",
      },
      date: "25/02/2025",
      likes: 2,
      dislikes: 0,
      discussionCount: 1,
    },
    {
      id: "2",
      content: "Has anyone tried the new feature? I'm finding it really useful for productivity.",
      author: {
        name: "Xamidullo",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2iYYurUJHqI6z1TxXkLniEngglbZ9v.png",
      },
      date: "25/02/2025",
      likes: 1,
      dislikes: 0,
      discussionCount: 0,
    },
    {
      id: "3",
      content: "Working on a new project. Will share updates soon!",
      author: {
        name: "Alex Smith",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2iYYurUJHqI6z1TxXkLniEngglbZ9v.png",
      },
      date: "25/02/2025",
      likes: 1,
      dislikes: 0,
      discussionCount: 1,
    },
  ])

  const [newPost, setNewPost] = useState("")
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim()) return

    const post: Post = {
      id: Date.now().toString(),
      content: newPost,
      author: {
        name: "Current User",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2iYYurUJHqI6z1TxXkLniEngglbZ9v.png",
      },
      date: new Date().toLocaleDateString(),
      likes: 0,
      dislikes: 0,
      discussionCount: 0,
    }

    setPosts([post, ...posts])
    setNewPost("")
  }

  // Update a post
  const handleEdit = (id: string) => {
    const postToEdit = posts.find((post) => post.id === id)
    if (postToEdit) {
      setEditingPost(postToEdit)
      setIsEditModalOpen(true)
    }
  }

  const handleUpdatePost = () => {
    if (!editingPost) return

    setPosts(posts.map((post) => (post.id === editingPost.id ? editingPost : post)))
    setIsEditModalOpen(false)
    setEditingPost(null)
  }

  // Delete a post
  const handleDelete = (id: string) => {
    setPostToDelete(id)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (postToDelete) {
      setPosts(posts.filter((post) => post.id !== postToDelete))
      setIsDeleteModalOpen(false)
      setPostToDelete(null)
    }
  }

  const handleLike = (id: string) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)))
  }

  const handleDislike = (id: string) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post)))
  }

  return (
    <div className="posts-page">
      <div className="container">
        <h1>Posts</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome to the community
        </p>

        <div className="post-form">
          <div className="form-header">
            <h3>Say Something...</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Create a post"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="posts-list">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ))}
        </div>
      </div>

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Edit Post</h3>
              <button className="close-btn" onClick={() => setIsEditModalOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <textarea
                value={editingPost?.content || ""}
                onChange={(e) => setEditingPost((prev) => (prev ? { ...prev, content: e.target.value } : null))}
              />
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleUpdatePost}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Are you sure?</h3>
              <button className="close-btn" onClick={() => setIsDeleteModalOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>This action cannot be undone. This will permanently delete your post.</p>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setIsDeleteModalOpen(false)}>
                Cancel
              </button>
              <button className="delete-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostsPage

