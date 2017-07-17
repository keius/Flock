## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - HomeNav
  - HomeBanner

**ProfileContainer**
  - ProfileGroup
  - ProfileEvent

**GroupContainer**
  - GroupBanner
  - GroupNav
  - GroupDetail

**EventContainer**
  - EventBanner
  - EventNav
  - EventDetail

**GroupSearch**
  - AutoSearch
  - AutoSearchResults

**NewEvent**
  - NewEvent

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/profile" | "ProfileContainer" |
| "/home/group/:groupId" | "GroupContainer" |
| "/home/group/:groupId/event/:eventId" | "EventContainer" |
| "/new-event" | "NewEventContainer" |
| "/group-search" | "GroupSearch" |
