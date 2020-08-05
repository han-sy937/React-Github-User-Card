import React, { Component } from 'react'
import { Body, MainContainer, ImageContainer, DetailsContainer,FolwrContainer, Follower } from './Style'

class UserCard extends Component {
    state = {
        user: [],
        followers: []
    }
   
    componentDidMount() {
        this.setState({ user: this.props.user, followers: this.props.followers})
    }

    render() {
        return (
            <Body>
                <MainContainer>
                    <ImageContainer>
                        <img src={this.props.users.avatar_url}/>
                    </ImageContainer>

                    <DetailsContainer>
                        <h1>{this.props.users.name}</h1>
                        <h3>{this.props.users.login}</h3>
                        <p>{this.props.users.location}</p>
                        <p>{this.props.users.bio}</p>
                    </DetailsContainer>
                </MainContainer>
                <FolwrContainer>
                {this.props.followers.map(follower => (
                    <Follower>
                        <img src={follower.avatar_url} />
                        <h1>{follower.login}</h1>
                    </Follower>
                ))}
                </FolwrContainer>
            </Body>
        )
    }
}
export default UserCard