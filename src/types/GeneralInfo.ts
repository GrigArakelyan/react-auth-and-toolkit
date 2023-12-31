
export interface GeneralInfoData {
   absences?: number;
   appUserID?: string;
   dateOfBirth?: any;
   email?: string;
   firstName?: string;
   gitHubUserName?: string;
   isActive?: boolean
   isCoreTeamMember?: boolean;
   languageID?: string;
   lastName?: string;
   mobilePhone?: string;
   name?: string;
   personalEmail?: string;
   slackUserName?: string;
   startDate?: any;
   userCrmProfilePermission?: 
   {
      id: string;
      isActive: boolean;
      isAllowToEditSetting: boolean;
      isAllowToEditLabels: boolean;
      isAllowToEditProfile: boolean; 
      isAllowToEditCrmUsers: boolean; 
      isAllowToEditPermissions: boolean;
      isAllowToResetSensitiveInformation: boolean;
      isAllowToViewLog:boolean;
      isAllowToViewSensitiveInformation: boolean;
      title: string;
      userCrmProfiles: null;
   }
   userPhoto?: null
}