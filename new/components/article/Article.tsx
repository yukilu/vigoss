import * as React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import { ReducerState } from '../../store/reducer';
import { changeArticle, changeShowedLists, fetchArticle } from '../../store/actions';
import { getArticleTitle, getCategory } from '../../store/data';

const StyArticle = styled.article`
    margin: 60px 400px 0 85px;
    padding: 50px 0;
`;

interface ArticleProps {
    title: string;
    html: string;
    getArticleFromServer: (title: string) => void;
}

function mapStateToProps(state: ReducerState) {
    const { articleTitle, articleContent } = state;
    return { title: articleTitle, html: articleContent };
}

function mapDispatchToProps(dispatch) {
    return {
        getArticleFromServer(title: string) {
            dispatch(changeArticle(title));
            dispatch(fetchArticle(title));
        }
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Article extends React.Component<ArticleProps, {}> {
    componentDidMount() {
        this.props.getArticleFromServer(getArticleTitle());
    }

    render() {
        const { title, html } = this.props;
        return(
            <StyArticle>
                <ArticleTitle articleTitle={title} />
                <ArticleContent content={html} />
            </StyArticle>
        );
    }
}