import PageContainer from "../../components/PageContainer";
import Posts from "../../components/Posts";
import './styles.scss';
import { useNavigate } from "react-router-dom";

export default function PostListPage() {

  // This function variable that I can use anywhere, even callback function.
  const navigate = useNavigate();

  const handleAddPostClick = () => {
    navigate('/posts/add');
  }

  return (

    <PageContainer title='Posts'>
      <Posts showOnlyPromoted={false} />

      <div className="add-post-button-container">
        <button onClick={handleAddPostClick}>
          Add Post
        </button>
      </div>
    </PageContainer> 

  );
  
}