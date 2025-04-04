import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px auto",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        width: "350px",
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={post.profileImage}
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
            backgroundColor: "#ddd",
          }}
          onError={(e) => (e.target.src = "https://via.placeholder.com/50")} // Fallback image
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton isLikedInitially={post.isLiked} />
    </div>
  );
};

export default PostCard;