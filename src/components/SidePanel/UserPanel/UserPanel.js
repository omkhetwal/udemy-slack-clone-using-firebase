import React, { Component } from 'react'
import { Dropdown, Grid,Header, Icon } from 'semantic-ui-react'


class UserPanel extends Component {
    dropdownOptions=()=> [
        {
            key: 'user',
            text: <span>Signed in as User</span>,
            disabled: true
        },
        {
            key: 'avatar',
            text: <span>Change Avatar</span>
        },
        {
            key: 'signup',
            text: <span>Sign Out</span>
        }
    ]
    render() {
        return (
            <Grid style={{background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{padding: '1.2rem',margin: 0}}>
                      <Header inverted floated="left" as="h2">
                          <Icon name="code"/>
                          <Header.Content>
                              DevChat
                          </Header.Content>
                      </Header>
                    </Grid.Row>
                    <Header style={{padding: '.25rem'}} as="h4" inverted>
                        <Dropdown trigger={<span>User</span>} options={this.dropdownOptions()}/>
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel
