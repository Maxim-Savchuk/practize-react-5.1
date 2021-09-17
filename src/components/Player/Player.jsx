import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
    state = {
        isVideoLoaded: false,
    }

    componentDidUpdate(prevProps) {
        const prevUrl = prevProps.url;
        const nextUrl = this.props.url;

        if (prevUrl !== nextUrl) {
            this.setState({
                isVideoLoaded: false,
            })
        }
    }

    render() {
        const { url } = this.props;
        const { isVideoLoaded } = this.state;
        const showLoader = url && !isVideoLoaded;

        const playerWidth = isVideoLoaded ? '100%' : 0;
        const playerHeight = isVideoLoaded ? '100%' : 0;

        return (
            <>
                {showLoader && <h2>Loading...</h2>}
                {url && (
                    <PlayerWrapper>
                        <StyledPlayer
                            url={url}
                            width={playerWidth}
                            height={playerHeight}
                            onReady={() => this.setState({ isVideoLoaded: true })}
                            controls
                        />
                    </PlayerWrapper>
                )}</>
        );
    }
}