import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {/* {`        
    _____       __     _   __      _            
   / ___/____ _/ /_   / | / /___ _(_)___  ____ _
   \\__ \\/ __ \`/ __/  /  |/ / __ \`/ / __  / __ \`/
  ___/ / /_/ / /_   / /|  / /_/ / / / / / /_/ / 
 /____/\\__,_/\\___/ /_/ |_/\\__,_/_/_/ /_/\\__, /  
                                       /____/   
          `} */}
              {`        
    ____             __  __       _____                       
   / __ \\____ ______/ /_/ /_     / ___/____ _____ _____ ______
  / /_/ / __ \`/ ___/ __/ __ \\    \\__ \\/ __ \`/ __ \`/ __ \`/ ___/
 / ____/ /_/ / /  / /_/ / / /   ___/ / /_/ / /_/ / /_/ / /    
/_/    \\__,_/_/   \\__/_/ /_/   /____/\\__,_/\\__, /\\__,_/_/     
                                          /____/                 
`}

        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____             __  __      
   / __ \\____ ______/ /_/ /_     
  / /_/ / __ \`/ ___/ __/ __ \\   
 / ____/ /_/ / /  / /_/ / / /  
/_/    \\__,_/_/   \\__/_/ /_/  
                                           
        _____                       
        / ___/____ _____ _____ ______
        \\__ \\/ __ \`/ __ \`/ __ \`/ ___/
      ___/ / /_/ / /_/ / /_/ / /    
      /____/\\__,_/\\__, /\\__,_/_/     
                /____/               
          `}
          
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/parthsagar13">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
// {`
//                      __  __                                  
//     ____  ____ ______/ /_/ /_     _________ _____ _____ ______
//    / __ \/ __ `/ ___/ __/ __ \   / ___/ __ `/ __ `/ __ `/ ___/
//   / /_/ / /_/ / /  / /_/ / / /  (__  ) /_/ / /_/ / /_/ / /    
//  / .___/\__,_/_/   \__/_/ /_/  /____/\__,_/\__, /\__,_/_/     
// /_/                                       /____/            
//   `}