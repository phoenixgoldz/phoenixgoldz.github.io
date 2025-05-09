export function CodeShowcase() {
  return (
    <section className="section code-showcase-section">
      <div className="container">
        <h2 className="section-title centered font-display">Code Showcase</h2>
        <div className="code-block">
          <div className="code-header">
            <span className="code-filename">PlayerController.cs</span>
            <div className="code-actions">
              <span className="code-language">C#</span>
            </div>
          </div>
          <pre className="code-content">
            <code>{`using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour
{
    // Movement parameters
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpForce = 10f;
    
    // Component references
    private Rigidbody2D rb;
    private Animator animator;
    private bool isGrounded = false;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
    }
    
    void Update()
    {
        // Handle horizontal movement
        float moveInput = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(moveInput * moveSpeed, rb.velocity.y);
        
        // Update animation parameters
        animator.SetFloat("Speed", Mathf.Abs(moveInput));
        
        // Handle jumping
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.AddForce(new Vector2(0f, jumpForce), ForceMode2D.Impulse);
            animator.SetTrigger("Jump");
            isGrounded = false;
        }
        
        // Flip character based on direction
        if (moveInput > 0)
            transform.localScale = new Vector3(1, 1, 1);
        else if (moveInput < 0)
            transform.localScale = new Vector3(-1, 1, 1);
    }
    
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            isGrounded = true;
            animator.SetBool("Grounded", true);
        }
    }
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
