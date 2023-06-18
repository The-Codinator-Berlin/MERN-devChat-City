interface User {
  userName: string,
  email: string,
  avatar: string,
  token: string
}

interface RegisterCredentials {
  userName: string,
  email: string,
  password: string,
  avatar: string
}

interface FetchedUploadedFile {
  avatar: string
}

// interface FetchedRegistrationResult{

// }

interface LoginCredentials {
  email: string;
  password: string
}

interface FetchedLoginResult {
  message: string,
  user: User,
  token: string
}





