import Article from "../Article/Article";
import Video from "../Video/Video";

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                if(item.props.views < 100)
                {
                    return (
                        <New {...item}/>
                    );
                }
                else
                {
                    if(item.props.views > 1000)
                    {
                        return (
                            <Popular {...item}/>
                        );
                    }
                    else
                    {
                        return (
                            <Video {...item} />
                        );
                    }
                }

            case 'article':
                if(item.props.views < 100)
                {
                    return (
                        <New {...item}/>
                    );
                }
                else
                {
                    if(item.props.views > 1000)
                    {
                        return (
                            <Popular {...item}/>
                        );
                    }
                    else
                    {
                        return (
                            <Article {...item} />
                        );
                    }
                }
        }
    });
};

export default List;