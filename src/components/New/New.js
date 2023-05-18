import Article from "../Article/Article";
import List from "../List/List";

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function withNewArticle(Article) {
    return class extends React.Component {
        render(){
            return(
                    <Article props={props} />
            )
        }
    }
}

function withNewList(List) {
    return class extends React.Component {
        render(){
            return(
                    <List props={props} />
            )
        }
    }
}

const New = withNewArticle(Article);
const New = withNewList(List);

export default New;