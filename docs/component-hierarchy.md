## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - HomeNav
  - HomeBanner

**ProfileGroupContainer**
  - ProfileGroup

**ProfileEventContainer**
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
| "/profile-group" | "ProfileGroupContainer" |
| "/profile-event" | "ProfileEventContainer" |
| "/home/group/:groupId" | "GroupContainer" |
| "/home/event/:eventId" | "EventContainer" |
| "/new-event" | "NewEventContainer" |
| "/group-search" | "GroupSearch" |
