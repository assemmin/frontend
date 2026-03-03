import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode; // 
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  resetError = () => {
    this.setState({ hasError: false });
  };
  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Рендерим fallback + кнопку Try Again
      return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {this.props.fallback}
          <br />
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              this.resetError();           
              window.location.href = "/";  
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;