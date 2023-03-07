import PageContainer from "../../components/PageContainer";
import Posts from "../../components/Posts";
import './styles.scss';

export default function PostListPage() {

  const handleAddPostClick = () => {
    alert('Redirect');
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