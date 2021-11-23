import {useEffect} from 'react';
import {CircularProgress, List, ListItem, ListItemText} from "@mui/material";
import styles from "./Articles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {selectArticlesError, selectArticlesList, selectArticlesLoading} from "../../store/articles/selectors";
import {getArticles} from "../../store/articles/actions";

export const Articles = () => {

  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesList);
  const loading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);

  const reloadArticles = () => {
    dispatch(getArticles());
  }

  useEffect(() => {
    reloadArticles()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h2>Articles</h2>
      {loading ? <CircularProgress/> : <>
        <button className={styles.reload} onClick={reloadArticles}>reload</button>
        {error && <h5>:(</h5>}
        <List>
          {articles.map(article => <ListItem key={article.id}>
            <ListItemText primary={
              <div className={styles.article}>
                <img className={styles.img} src={article.imageUrl} alt={article.title}/>
                <p className={styles.title}>
                  {article.title}
                </p>
                <p>
                  {article.summary}
                </p>
              </div>
            }/>
          </ListItem>)}
        </List>
      </>}
    </div>
  );
};
