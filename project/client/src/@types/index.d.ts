interface User {
  userName: string,
  email: string,
  avatar?: string,
  token: string
  gitHub?: string,
}

interface RegisterCredentials {
  userName: string,
  email: string,
  password: string,
  avatar: string
}

type Token = string | null

interface FetchedUploadedFile {
  avatar: string
}

interface LoginCredentials {
  email: string;
  password: string
}

interface FetchedLoginResult {
  message: string,
  user: User,
  token: string
}

interface FetchError {
  error: string;
}

type ResponseError = string | null;

interface FetchedProfileResult {
  user: User
}





