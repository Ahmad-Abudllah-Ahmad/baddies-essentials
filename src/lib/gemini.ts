import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyDIIU5LsHVrWzeSoDpbSxyJqx9NqUX074k')

export interface SearchSuggestion {
  query: string
  category: string
  brand?: string
  priceRange?: string
  reason: string
}

export interface ProductRecommendation {
  productId: string
  name: string
  brand: string
  price: number
  reason: string
  matchScore: number
}

export class GeminiSearchService {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  async getSearchSuggestions(query: string, budget?: number): Promise<SearchSuggestion[]> {
    try {
      const prompt = `
        As a fashion shopping assistant for a Pakistani e-commerce platform, analyze this search query: "${query}"
        ${budget ? `User budget: PKR ${budget}` : ''}
        
        Available brands: Khaadi, Outfitters, Gul Ahmed, Nishat Linen, Alkaram Studio, Huda Beauty, Lama, Breakout, CrossStitch, Bata, Servis, Nike Pakistan
        
        Categories: Dresses, Suits, T-Shirts, Jackets, Jeans, Kurtas, Lipsticks, Makeup, Footwear, Sneakers, Formal Shoes, Athletic Wear
        
        Generate 5 relevant search suggestions that would help the user find products. Consider:
        - Color preferences mentioned
        - Style/design preferences
        - Budget constraints
        - Brand suggestions based on quality and price range
        - Seasonal relevance
        
        Return as JSON array with format:
        [
          {
            "query": "suggested search term",
            "category": "product category",
            "brand": "recommended brand (optional)",
            "priceRange": "price range like 'PKR 2000-5000' (optional)",
            "reason": "why this suggestion matches user intent"
          }
        ]
      `

      const result = await this.model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      
      // Extract JSON from response
      const jsonMatch = text.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0])
      }
      
      return []
    } catch (error) {
      console.error('Gemini API error:', error)
      return []
    }
  }

  async getProductRecommendations(
    userQuery: string, 
    userBudget?: number,
    preferredColors?: string[],
    preferredBrands?: string[]
  ): Promise<ProductRecommendation[]> {
    try {
      const prompt = `
        User is looking for: "${userQuery}"
        ${userBudget ? `Budget: PKR ${userBudget}` : ''}
        ${preferredColors?.length ? `Preferred colors: ${preferredColors.join(', ')}` : ''}
        ${preferredBrands?.length ? `Preferred brands: ${preferredBrands.join(', ')}` : ''}
        
        Available products database:
        - Khaadi: Traditional wear, lawn suits, kurtas (PKR 2000-8000)
        - Outfitters: Youth fashion, t-shirts, jeans, hoodies (PKR 1500-5000)  
        - Nike Pakistan: Sports shoes, athletic wear (PKR 5000-20000)
        - Huda Beauty: Makeup, lipsticks, palettes (PKR 2000-6000)
        - Bata: Formal shoes, casual footwear (PKR 2000-7000)
        - Servis: Sports shoes, casual shoes (PKR 2000-5000)
        
        Based on the user's query and preferences, recommend 6 products that best match their needs.
        Consider style, budget, brand reputation, and seasonal appropriateness.
        
        Return as JSON array:
        [
          {
            "productId": "product_id",
            "name": "product name",
            "brand": "brand name",
            "price": price_in_pkr,
            "reason": "why this product matches user needs",
            "matchScore": score_0_to_100
          }
        ]
      `

      const result = await this.model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      
      const jsonMatch = text.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0])
      }
      
      return []
    } catch (error) {
      console.error('Gemini API error:', error)
      return []
    }
  }

  async getBrandRecommendations(budget: number, style: string): Promise<string[]> {
    try {
      const prompt = `
        User budget: PKR ${budget}
        Style preference: ${style}
        
        Pakistani fashion brands available:
        - Khaadi: Premium traditional wear (PKR 3000-10000)
        - Outfitters: Youth casual fashion (PKR 1500-5000)
        - Gul Ahmed: Traditional & formal wear (PKR 2500-8000)
        - Nishat Linen: Quality fabrics (PKR 2000-7000)
        - Huda Beauty: Premium makeup (PKR 2000-6000)
        - Lama: Contemporary streetwear (PKR 2000-6000)
        - Breakout: Urban lifestyle (PKR 1800-5000)
        - Bata: Quality footwear (PKR 2000-7000)
        - Nike Pakistan: Premium sports (PKR 5000-20000)
        
        Recommend 3-4 brands that best fit the user's budget and style preference.
        Return as JSON array of brand names: ["brand1", "brand2", "brand3"]
      `

      const result = await this.model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      
      const jsonMatch = text.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0])
      }
      
      return []
    } catch (error) {
      console.error('Gemini API error:', error)
      return []
    }
  }
}
