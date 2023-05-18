import Article from "../Article/Article";
import List from "../List/List";

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

function withPopularArticle(Article) {
    return class extends React.Component {
        render(){
            return(
                    <Article props={props} />
            )
        }
    }
}

function withPopularList(List) {
    return class extends React.Component {
        render(){
            return(
                    <List props={props} />
            )
        }
    }
}

const Popular = withPopularArticle(Article);
const Popular = withPopularList(List);

export default Popular;